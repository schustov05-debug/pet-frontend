import React, { useState } from 'react';
import './HelpPage.css';

const HELP_CARDS = [
  {
    id: 'volunteer',
    title: 'Стать волонтёром / опекуном',
    short: 'Приходите погулять с собаками, отвезите животное в клинику, возьмите опеку над питомцем приюта',
    detail: {
      title: 'Волонтёрство',
      sections: [
        {
          heading: 'Прогулки с собаками по субботам',
          text: 'Выгул помогает социализации животных и даёт людям время с питомцем. Проводится по субботам с 11:30 до 15:00 по предварительной записи (ВК или Telegram).'
        },
        {
          heading: 'Автоволонтерство',
          text: 'Нужны водители или сопровождающие для доставки вещей, посылок и перевозки животных в клинику.'
        },
        {
          heading: 'Поддержка в соцсетях',
          text: 'Помогите нам, рассказывая о приюте друзьям, делая репосты. Любая огласка помогает животным найти дом.'
        },
        {
          heading: 'Фото- и видеосъёмка',
          text: 'Качественные снимки повышают шансы питомца на усыновление. Будем благодарны, если вы снимете животных на субботнем выгуле или приедете в приют специально.'
        },
      ]
    }
  },
  {
    id: 'food',
    title: 'Купить корм и лекарства',
    short: 'Мы сотрудничаем с Petshop, там можно заказать необходимые корма и указать наш приют как адрес доставки.',
    detail: {
      title: 'Корм и лекарства',
      sections: [
        {
          heading: 'Корма для собак',
          text: 'Повседневные: Chappi / Pedigree (взрослые), Purina Pro Plan Adult Medium, Puppy, Sensitive Digestion, Sensitive Skin; Farmina VetLife Hypoallergenic.'
        },
        {
          heading: 'Корма для кошек',
          text: 'Повседневные: Purina Pro Plan Sterilised (взрослые стерилизованные), Purina Pro Plan Kitten (котята).'
        },
        {
          heading: 'Препараты для ЖКТ',
          text: 'Гептрал/Гептор (амп./табл.), Де-нол, Квамател, Но-Шпа (амп.), Одестон, Омез (капс./фл.), Урсофальк/Урсодез (капс.), Фосфалогель, Эсливер (табл.), Эскейп, Эссенциале (амп./табл.), Антепсин, Смекта, Энтеросгель, пробиотики (Линекс, Максилак капс.), Капли, мази и медтовары.'
        },
      ]
    }
  },
  {
    id: 'donate',
    title: 'Сделать пожертвование',
    short: 'Финансовые поступления фиксируются, и вы всегда можете посмотреть, на что были потрачены ваши деньги.',
    detail: {
      title: 'Волонтёрство',
      sections: [
        {
          heading: null,
          text: 'Все полученные средства идут на содержание приюта для животных. Мы будем благодарны вашим разовым пожертвованиям и ежемесячной помощи.'
        },
        {
          heading: 'Реквизиты для помощи:',
          text: 'Номер карты Сбербанка: 4276 5500 6128 9933\n(по номеру тел +7 (921) 881-72-42)\nНаталья Евгеньевна С.'
        },
      ]
    }
  },
];

function HelpPage() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <div className="help-page">
      <h1 className="help-title">Помощь приюту</h1>

      {/* Основные карточки */}
      <div className="help-cards">
        {HELP_CARDS.map(card => (
          <div className="help-card" key={card.id}>
            <div className="help-card-body">
              <h3 className="help-card-title">{card.title}</h3>
              <p className="help-card-text">{card.short}</p>
            </div>
            <button
              className="btn-more"
              onClick={() => setOpenCard(card.id)}
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>

      {/* Детальные блоки */}
      {openCard && (
        <div className="help-detail-overlay" onClick={() => setOpenCard(null)}>
          <div className="help-detail-box" onClick={e => e.stopPropagation()}>
            <button className="help-detail-close" onClick={() => setOpenCard(null)}>✕</button>
            {HELP_CARDS.find(c => c.id === openCard)?.detail.sections.map((section, i) => (
              <div className="detail-section" key={i}>
                {section.heading && (
                  <p className="detail-heading">{section.heading}</p>
                )}
                <p className="detail-text" style={{ whiteSpace: 'pre-line' }}>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HelpPage;
