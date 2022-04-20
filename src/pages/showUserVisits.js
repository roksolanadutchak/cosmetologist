import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Switch, useParams, useRouteMatch} from "react-router";
import { getVisits } from "../actions/visitActions";
export const ShowUserVisits = () => {
    const dispatch = useDispatch()
    const visits = useSelector((state) => state.visits.visits)
    const { id }= useParams();
    useEffect(()=>{
        dispatch(getVisits(id))
    }, [dispatch])
    console.log(visits)
    console.log('Here should be visits')
    return (
        <div>
            <div className="post-wrapper">
                {visits && visits.map(({additional_information, finishTime, procedure, reccomended_cosmetics, startTime, state_after_procedure, visitId}) => (
                    <div key={visitId} className="card-visit">
                        <div className="card-visit-header">
                            <div className="col-span-11">
                                <h1 className="text-center">{procedure}</h1>
                            </div>
                        </div>
                        <div className="m-3">
                            <p className="text-justify leading-relaxed"><span className="font-bold">Початок процедури</span> {startTime}</p>
                            <p className="text-justify leading-relaxed"><span className="font-bold">Кінець процедури</span> {finishTime}</p>
                            <p className="text-justify leading-relaxed"><span className="font-bold">Додаткова інформація</span> {additional_information}</p>
                            <p className="text-justify leading-relaxed"><span className="font-bold">Рекомендована косметика</span> {reccomended_cosmetics}</p>
                            <p className="text-justify leading-relaxed"><span className="font-bold">Стан після процедури</span> {state_after_procedure}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
