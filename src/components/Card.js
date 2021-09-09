const card = ({user}) => {
    return (
        <div class="card_ m-3">
            <div class="card__front card__part">
                <p class="card__info">*Bank Name*</p>
                <p class ="card_number">
                    <div class ="card__label">Account Number</div>
                    {user.id}
                </p>
                <div class ="card__space-75">
                <span class ="card__label">Card holder</span>
                <p class ="card__info">{user.name}</p>
                </div>
                <div class ="card__space-25">
                <span class ="card__label">Balance</span>
                <p class ="card__info">P{user.balance}</p>
                </div>
                </div>
            </div>
            )
}

            export default card
