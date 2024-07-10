import React from "react";
import "./footer.css"

const Footer: React.FC = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="about-shop">
                        <p className="title-about-shop">О МАГАЗИНЕ</p>
                        <p className="text-about-shop">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.
                        </p>
                    </div>
                    <div className="categories">
                        <p className="title-categories">КАТЕГОРИИ</p>
                        <div className="btns-categories">
                            <button className="btn-categories">часы</button>
                            <button className="btn-categories">браслеты</button>
                            <button className="btn-categories">ремни</button>
                            <button className="btn-categories">ювелирные изделия</button>
                            <button className="btn-categories">запонки</button>
                        </div>
                    </div>
                    <div className="mailing-list">
                        <p className="title-mailing-list">РАССЫЛКА</p>
                        <p className="text-mailing-list">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.
                        </p>
                        <div className="input-btn">
                            <input type="text" placeholder="Ваша почта" />
                            <button>ПОДПИСАТЬСЯ</button>
                        </div>
                    </div>
                </div>
            </footer> 
            <div className="line-under-footer">
                <p className="roots">© 2020 Все права защищены</p>
            </div>
        </>
          
    )
    
}

export default Footer;