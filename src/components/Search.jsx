import { useState } from 'react';

const Search = () => {
    const [model, setModel] = useState('');
    return (
        <section className="search">
            <div className="container">
                <div className="search-content">
                    <h6>Поиск МОДЕЛИ</h6>
                    <select
                        aria-label="Выберите модель"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    >
                        <option value="" disabled>Модель</option>
                        <option>iPhone 12 Mini</option>
                        <option>iPhone 12</option>
                        <option>iPhone 12 Pro</option>
                        <option>iPhone 12 Pro Max</option>
                        <option>iPhone 13 Mini</option>
                        <option>iPhone 13</option>
                        <option>iPhone 13 Pro</option>
                        <option>iPhone 13 Pro Max</option>
                        <option>iPhone 14</option>
                        <option>iPhone 14 Plus</option>
                        <option>iPhone 14 Pro</option>
                        <option>iPhone 14 Pro Max</option>
                        <option>iPhone 15</option>
                        <option>iPhone 15 Plus</option>
                        <option>iPhone 15 Pro</option>
                        <option>iPhone 15 Pro Max</option>
                    </select>
                    <div className="btn-box">
                        <button>Поиск</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Search;
