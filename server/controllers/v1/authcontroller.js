import User from '../../models/Users.js'

const login = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user){
        if(user.comparePass(password)){
            const token = user.generateToken();
            return res.json({user, token});
        }
    }
    return res.status(400).json({email: 'These credentials do not match our records'});
}

const register = async (req, res) => {
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password
    })

    const token = user.generateToken();

    return res.status(201).json({ user, token });
}


const forgotpassword = async (req,res) => {
    const {email} = req.body;


    const user = await User.findOne({ email });

    await user.forgotPass();

    return res.json({message: 'Password has reset'});
}

export default {
    login,
    register,
    forgotpassword
}
