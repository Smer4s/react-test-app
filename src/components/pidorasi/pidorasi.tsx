import { useEffect, useState } from 'react';
import './pidorasi.css'
import { CatApi, ICat } from '../../services/cat-api';

export const Pidorasi = () => {
    const { GetRandomCat } = CatApi;
    const [photos, setCats] = useState<ICat[]>([]);

    useEffect(() => {
        setCats(getCatsFromStorage(localStorage));
    }, []);

    const addCatPhoto = () => {
        GetRandomCat()
            .then(response => {
                if (response) {
                    const newCat = response[0] as ICat;
                    setCats(prevPhotos => [...prevPhotos, newCat]);

                    addCatToStorage(localStorage, newCat);
                }
            })
            .catch(error => console.error('Error fetching cat image:', error));
    };

    const addCatToStorage = (storage: Storage, cat: ICat) => {
        storage.setItem(storage.length.toString(), cat.url);
    }

    const getCatsFromStorage = (storage: Storage) => {
        let list: ICat[] = new Array(storage.length);

        for (let i = 0; i < storage.length; i++) {
            const key = i.toString();
            const value = storage.getItem(key);
            if (value !== null) {
                
                var cat: ICat = {
                    id: key,
                    url: value
                }

                list[i] = cat;
            }
        }

        return list;
    }

    const clearLocalStorage = () => {
        localStorage.clear();
        setCats([]);
    }

    return (
        <div>
            <div className='photos-container'>
                {
                    photos.map((item) => (
                        <img src={item.url} alt='cat' className='photo' />
                    ))
                }
            </div>
            <button onClick={addCatPhoto} className='add-cat-button'>
                Добавить пидораса
            </button>
            <button onClick={clearLocalStorage} className='add-cat-button'>
                Очистить пидорасов
            </button>
        </div>
    );
};

