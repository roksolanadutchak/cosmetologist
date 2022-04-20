import React, {useEffect, useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getUsers } from "../actions/clientActions";
import {Link } from 'react-router-dom';

export function ClientsList(){
    const data = [{
        id: 0,
        title: 'Дутчак Роксолана',
        body: 'software engineer',
        birthday: '15.11.1997',
        phone: "+38002020202",
        instagram: "https://www.instagram.com/roksolana_dutchak/"
    }]
    const dispatch = useDispatch()
    const users = useSelector((state) => state.app.users)
    const usersError = useSelector((state) => state.app.error)
    const usersLoading = useSelector((state) => state.app.loading)
    console.log('work')
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    console.log(users)
    return (
        <div>
            <div className="post-wrapper">
                { users && users.map(({id, fullName, birthday, workplace}) => (
                    <div key={id} className="card" >
                        <div className="card-header">
                            <div className="col-span-11">
                                <h1 className="text-center">{fullName}</h1>
                            </div>
                        </div>
                        <div className="m-3">
                            <p className="text-justify leading-relaxed">Місце роботи {workplace}</p>
                            <p className="text-justify leading-relaxed">Дата народження {birthday}</p>
                            {/* <p className="text-justify leading-relaxed">Номер телефону{phone}</p>
                            <p className="text-justify leading-relaxed">Силка на інстаграм</p> */}
                        </div>
                        <div className="flex justify-around">
                            <button className="btn btn-submit">Додаткова інформація</button>
                            <button className="btn btn-submit"><Link to={`/visit/${id}`}>Додати візит</Link></button>
                            <button className="btn btn-submit"><Link to={`/showvisits/${id}`}>Показати візити</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}