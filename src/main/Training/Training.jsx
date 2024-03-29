import Style from '../../styles/Main/Training/Training.module.css';

const Training = () => {
    document.title = 'Training';

    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ];
      const d = new Date();
      const n = d.getDay();
      console.log(days[n]);


    return (
        <main>
            <section className={Style.training}>
                {days[n] === 'Понедельник' && 
                    <>
                    <p>Сегодня:</p>
                    <p>
                    Ноги и плечи
                    </p>
                    <p>Ноги</p>

                    <p>
                    1 Статические выпады 3-4 подхода (15раз)
                    Без веса.
                    </p>

                    <p>
                    2. Жим ногами 3-4 Подхода (15 Раз)
                    По 40-50кг (50 если ноги еще не в ахуе).
                    </p>

                    <p>
                    3. Сгибание ноги в колене (сидя / лежа, медленно) 3-4 Подхода (10-12 Раз)
                    По 30ib - 13,5 кг.
                    </p>

                    <p>Плечи</p>

                    <p>
                    4. Вертикальный жим (сидя поднимаем гантели поралельно) 3-4 Подхода (10-12 Раз)
                    По 7.5кг.
                    </p>

                    <p>
                    5. Обьемы гантели через стороны, стоя (жеско ваще, не выше плеч, не двигая плечами поднимаем локти) 3-4 Подхода (12 Раз)
                    По 7.5кг.
                    </p>

                    <p>
                    6. Тяга к подбородку на блоке 3-4 Подхода (10-12 Раз)
                    Первый тренажер около ног.
                    По 50ib – 22.5кг.
                    </p>
                    </>
                }
                {days[n] === 'Вторник' && 
                     <>
                     <p>Завтра:</p>
                     <p>
                     Грудные и трицепсы
                     </p>
                     <p>Грудные</p>
 
                     <p>
                     1. Жим лежа (гриф ближе к соскам) 3-4 Подхода (8-12раз).
                     Больше 12 добавить вес, меньше 8 убавить вес.
                     По 30кг.
                     </p>
 
                     <p>
                     2. Жим лежа под наклоном (гриф ближе к шее) 3-4 Подхода (8-12) раз
                     Больше 12 добавить вес, меньше 8 убавить вес.
                     По 25кг.
                     </p>
 
                     <p>
                     3. Наклонная разводка (тяга гантелей в форме бабочки) 3-4 Подхода (12-15 раз)
                     Разводной тренажер.
                     По 50ib – 22.5кг.
                     </p>
 
                     <p>Трицепсы</p>
 
                     <p>
                     4. Французский жим гантелями 3-4 Подхода (12-15раз)
                     По 7.5кг.
                     </p>
 
                     <p>
                     5. Разгибание из-за головы гантелью сидя (Не двигать локтем, касаться трапеции) 3-4 Подхода (12 Раз)
                     По 5кг.
                     </p>
 
                     <p>
                     6. Разгибание рук на верхнем блоке стоя (1 тренажер от  приседания с штангой, рядом с качем ног) 3-4 Подхода (12-15 раз)
                     По 50ib – 22.5кг.
                     </p>
                     </>
                }
                {days[n] === 'Среда' && 
                     <>
                     <p>Сегодня:</p>
                     <p>
                     Грудные и трицепсы
                     </p>
                     <p>Грудные</p>
 
                     <p>
                     1. Жим лежа (гриф ближе к соскам) 3-4 Подхода (8-12раз).
                     Больше 12 добавить вес, меньше 8 убавить вес.
                     По 30кг.
                     </p>
 
                     <p>
                     2. Жим лежа под наклоном (гриф ближе к шее) 3-4 Подхода (8-12) раз
                     Больше 12 добавить вес, меньше 8 убавить вес.
                     По 25кг.
                     </p>
 
                     <p>
                     3. Наклонная разводка (тяга гантелей в форме бабочки) 3-4 Подхода (12-15 раз)
                     Разводной тренажер.
                     По 50ib – 22.5кг.
                     </p>
 
                     <p>Трицепсы</p>
 
                     <p>
                     4. Французский жим гантелями 3-4 Подхода (12-15раз)
                     По 7.5кг.
                     </p>
 
                     <p>
                     5. Разгибание из-за головы гантелью сидя (Не двигать локтем, касаться трапеции) 3-4 Подхода (12 Раз)
                     По 5кг.
                     </p>
 
                     <p>
                     6. Разгибание рук на верхнем блоке стоя (1 тренажер от  приседания с штангой, рядом с качем ног) 3-4 Подхода (12-15 раз)
                     По 50ib – 22.5кг.
                     </p>
                     </>
                }
                {days[n] === 'Четверг' && 
                    <>
                    <p>Завтра:</p>
                    <p>
                    Спина и бицепс
                    </p>
                    <p>Спина</p>

                    <p>
                    1. Тяга вертикального блока (1 тренажер от аэробных) 3-4 Подхода (12-15 Раз)
                    По 50ib – 22.5кг.
                    </p>

                    <p>
                    2. Горизонтальный блок (1 тренажер от аэробных) 3-4 Подхода (12-15 раз)
                    По 50ib – 22.5кг.
                    </p>

                    <p>
                    3. Гиперэкстензии 3-4 Подхода (15-20 Раз) руки на груди крест
                    Без веса.
                    </p>

                    <p>Бицепсы</p>

                    <p>
                    4. Тяга одной гантели в наклоне (Горизонтальная скамейка, секси поза, упереться коленом об скамейку) 3-4 Подхода (10-12 раз)
                    По 10кг.
                    </p>

                    <p>
                    5. Сгибание рук со штангой (EZ-гриф) 3-4 Подхода (10-12 Раз)
                    По 2.5кг с каждой стороны.
                    </p>

                    <p>
                    6. Сгибание рук с гантелями 3-4 Подхода (10 Раз)
                    По 7,5кг
                    Руки по бокам.
                    </p>
                    </>
                }
                {days[n] === 'Пятница' && 
                    <>
                    <p>Сегодня:</p>
                    <p>
                    Спина и бицепс
                    </p>
                    <p>Спина</p>

                    <p>
                    1. Тяга вертикального блока (1 тренажер от аэробных) 3-4 Подхода (12-15 Раз)
                    По 50ib – 22.5кг.
                    </p>

                    <p>
                    2. Горизонтальный блок (1 тренажер от аэробных) 3-4 Подхода (12-15 раз)
                    По 50ib – 22.5кг.
                    </p>

                    <p>
                    3. Гиперэкстензии 3-4 Подхода (15-20 Раз) руки на груди крест
                    Без веса.
                    </p>

                    <p>Бицепсы</p>

                    <p>
                    4. Тяга одной гантели в наклоне (Горизонтальная скамейка, секси поза, упереться коленом об скамейку) 3-4 Подхода (10-12 раз)
                    По 10кг.
                    </p>

                    <p>
                    5. Сгибание рук со штангой (EZ-гриф) 3-4 Подхода (10-12 Раз)
                    По 2.5кг с каждой стороны.
                    </p>

                    <p>
                    6. Сгибание рук с гантелями 3-4 Подхода (10 Раз)
                    По 7,5кг
                    Руки по бокам.
                    </p>
                    </>
                }
                {days[n] === 'Суббота' && 
                    <p>Отдых</p>
                }
                {days[n] === 'Воскресенье' && 
                    <>
                    <p>Завтра:</p>
                    <p>
                    Ноги и плечи
                    </p>
                    <p>Ноги</p>

                    <p>
                    1 Статические выпады с гантелями  3-4 подхода  (15раз)
                    Без веса.
                    </p>

                    <p>
                    2. Жим ногами 3-4 Подхода (15 Раз)
                    По 40-50кг (50 если ноги еще не в ахуе).
                    </p>

                    <p>
                    3. Сгибание ноги в колене (сидя / лежа, медленно) 3-4 Подхода (10-12 Раз)
                    По 30ib - 13,5 кг.
                    </p>

                    <p>Плечи</p>

                    <p>
                    4. Вертикальный жим (сидя поднимаем гантели поралельно) 3-4 Подхода (10-12 Раз)
                    По 7.5кг.
                    </p>

                    <p>
                    5. Обьемы гантели через стороны, стоя (жеско ваще, не выше плеч, не двигая плечами поднимаем локти) 3-4 Подхода (12 Раз)
                    По 7.5кг.
                    </p>

                    <p>
                    6. Тяга к подбородку на блоке 3-4 Подхода (10-12 Раз)
                    Первый тренажер около ног.
                    По 50ib – 22.5кг.
                    </p>
                    </>
                }
            </section>
        </main>
    );
};

export default Training;