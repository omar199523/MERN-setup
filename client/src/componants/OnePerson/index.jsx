import React from 'react';
import { useDispatch } from 'react-redux';
import {H5} from '../Typograph';
import {deletPerson,presentPerson} from '../../store/action/parsonData';
import { push } from 'connected-react-router';

import './style.css'
const OnePerson = ({person}) => {
	const dispatch = useDispatch()
    const {
        _id,
        petitionNo,
		deceasedName,personName
		} =person;
    const openPdfView =async()=>{
        await dispatch(presentPerson(person));
        await dispatch(push('/pdfviewer'));
    }
    return (
        <div className ="one-person" key = {_id}>
            <H5 className="petition-no">{petitionNo}</H5>
            <H5 className="deceased-name">{deceasedName}</H5>
            <H5 className="person-name">{personName}</H5>
            <button className="open-button" onClick={openPdfView} >open</button>
            <button className="deleat-button" onClick={()=>{dispatch(deletPerson(_id))}}>deleat</button>
        </div>
    )
}
export default OnePerson;
