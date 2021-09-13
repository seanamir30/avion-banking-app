

const Menu = () => {
    return (
        <div>
            <input type="checkbox" id="active" />
            <label for="active" class="menu-btn"><span></span></label>
            <label for="active" class="close"></label>
            <div class="wrapper">
                <div class="container h-75 d-flex flex-column justify-content-center align-items-center">
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-square-md bg-danger">*Insert Something*</button>
                        <button type="button" class="btn btn-primary btn-square-md bg-success">*Insert Something*</button>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-square-md bg-warning">*Insert Something*</button>
                        <button type="button" class="btn btn-primary btn-square-md bg-primary">*Insert Something*</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
