import { useState } from "react";

const Card = ({ id }) => {
  const user = JSON.parse(localStorage.getItem(id));
  console.log(id);
  return (
    <div class="card_ m-3 mt-4">
      <div class="card__front card__part">
        <p class="card__info">
          <span style={{ fontSize: "1.5rem" }}>&#x2660;</span>INSTACASH
        </p>
        <p class="card_number">
          <div class="card__label">Account Number</div>
          {user.id}
        </p>
        <div class="card__space-75">
          <span class="card__label">Card holder</span>
          <p class="card__info">{user.name}</p>
        </div>
        <div class="card__space-25">
          <span class="card__label">Balance</span>
          <p class="card__info">₱{user.balance}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
