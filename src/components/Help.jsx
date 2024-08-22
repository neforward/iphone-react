const Help = () => {
  return (
    <>
      <section className="help">
        <div className="container">
          <div className="help-content">
            <div className="help-txt">
              <h2>Нужна консультация?</h2>
              <p>Оставьте Ваш номер телефона и запишем вас на бесплатную консультацию.</p>
            </div>
            <div className="help-form">
              <input type="text" placeholder="Имя" />
              <input type="number" placeholder="+7 --- --- -- --"/>
              <button>Перезвонить мне</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Help