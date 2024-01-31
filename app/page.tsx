"use client";
import { $cardStore, addCard } from "@/stors/cards";
import { Button, Input } from "@mui/material";
import { useEvent, useUnit } from "effector-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import Card from "@/components/card/Card";

export default function Home() {
  const cardList = useUnit($cardStore);

  const addCardEvent = useEvent(addCard);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addCardEvent(data);
    console.log(cardList);
  };

  return (
    <main>
      <div className="container">
        <div className="main__fild">
          <div className="main__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Задача</h2>
              <label>
                Название задачи
                <input
                  {...register("name", { required: true })}
                  placeholder="Название задачи"
                  className="input"
                />
                {errors.name && <span>Вы не заполнили название задачи</span>}
              </label>

              <label>
                Описание
                <input
                  {...register("text", { required: false })}
                  placeholder="Текст задачи"
                  className="input"
                />
              </label>

              <Button type="sumbit" variant="contained">
                Отправить
              </Button>
              <div  className="Div_work" >
              Работу выполнил: Скутин Леонид Андреевич              
      </div>
            </form>

          </div>
          <div className="main__cards">
            {cardList.map((el, index) => {
              return <Card key={index} name={el.name} text={el.text} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
