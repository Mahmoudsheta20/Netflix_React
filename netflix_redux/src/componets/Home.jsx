import requests from '../requsests'
import React from 'react'
import Row from './Row'
import '../App.css'
import Banner from './Banner'
import Navbar from './Navbar'


const Home = () => {
  console.log(requests.fetchneflix)
  return (
    <div className='App'>

<Navbar/>



        <Banner  fetchUrl = {requests.fetchTrending} />



 
        <Row  titel="NETFLIX ORIGINALS" fetchUrl = {requests.fetchneflix}
        
        isLargeRow
        / > <Row  titel="NETFLIX ORIGINALS" fetchUrl = {requests.fetchneflix}/>
         <Row  titel="top rated" fetchUrl = {requests.fetchTrending}  / >
        <Row  titel="action movis" fetchUrl = {requests.fetch_action} / >
        <Row  titel="comedy" fetchUrl = {requests.fetch_comdy} / >
        <Row  titel="Documentry" fetchUrl = {requests.fetch_documantry} / >
        <Row  titel="tv top rated" fetchUrl = {requests.fetch_tv} / >
        <Row  titel="tv top rated" fetchUrl = {requests.fetch_flix} / >
      



    </div>
  )
}

export default Home