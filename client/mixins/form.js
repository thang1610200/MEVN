export default  {
    data: () => ({
        loading: false
    }),
    methods: {
        toogleLoading() {
            this.loading = !this.loading;
        }
    }
}