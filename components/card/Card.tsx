import Image from "next/image";

const Card = ({ name, text }) => {
  let currentDate: object = new Date();
  return (
    <div className="card">
      <h3 className="card__title">{name}</h3>
      <p className="card__text">{text}</p>
      <p className="card__date">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M12.6667 2.66678H3.33334C2.59696 2.66678 2.00001 3.26373 2.00001 4.00011V13.3334C2.00001 14.0698 2.59696 14.6668 3.33334 14.6668H12.6667C13.4031 14.6668 14 14.0698 14 13.3334V4.00011C14 3.26373 13.4031 2.66678 12.6667 2.66678Z"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6667 1.33325V3.99992"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.33331 1.33325V3.99992"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.00001 6.66678H14"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.33331 9.33325H5.34331"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.00001 9.33325H8.01001"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6667 9.33325H10.6767"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.33331 12H5.34331"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.00001 12H8.01001"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6667 12H10.6767"
            stroke="#64748B"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {currentDate.getDate()}.{currentDate.getMonth() + 1}.
        {currentDate.getFullYear()}
      </p>
    </div>
  );
};

export default Card;
