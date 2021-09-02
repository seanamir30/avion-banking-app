const LoginPage = () => {
    return (
        <div className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-log-7 col-xl-7">
                        *Insert something*
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5">
                        <form>
                            <div class="form-floating mb-4">
                                <input type="email" id="emailInput" class="form-control form-control-lg"
                                    placeholder="Enter your email here!" />
                                <label class="form-label" for="emailInput">Email address</label>
                            </div>
                            <div class="form-floating mb-4">
                                <input type="password" id="passwordInput" class="form-control form-control-lg"
                                    placeholder="Password" />
                                <label class="form-label" for="passwordInput">Password</label>
                            </div>
                            <button type="button" className="btn btn-primary">LOG IN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
