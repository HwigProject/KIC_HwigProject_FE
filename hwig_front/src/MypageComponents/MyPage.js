import React, {useEffect,useState}  from 'react'
import './MyPage.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MyPageInfo from './MyPageInfo'
import MyPageNavi from './MyPageNavi'
import MyPageOrderL from './MyPageOrderL'
import MyPageOrderD from './MyPageOrderD'
import MyPageR from './MyPageR'
import MyPageModify from './MyPageModify'
import MyPageConf from './MyPageConf'
import MyPageReviewF from './MyPageReviewF'

import axios from 'axios'
import { host } from '../Containers/ServerAddress'




export default function MyPage() {
    const [userInfo,setUserInfo] = useState(null)
    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setUserInfo(res.data)
            })
    }
    useEffect(() => {if (!userInfo) {
        getAxiosData(`api/members/kikiki`)
        }})
    return (
        <>
                    {userInfo && <MyPageInfo userInfo = {userInfo} /> }
                    <div className="mypage-container">
                    <MyPageNavi/>
                    <Switch>
                            <Route path="/mypage/order" component={MyPageOrderL}/>
                            <Route path="/mypage/review" component={MyPageR}/>
                            <Route path="/mypage/confpw" component={MyPageConf}/>
                            <Route path="/mypage/modify" component={MyPageModify}/>
                            <Route path="/mypage/orderdetail" component={MyPageOrderD}/>
                            <Route path="/mypage/reviewform" component={MyPageReviewF}/>
                            <Route component={MyPageR}/>
                    </Switch>
                    </div>
        </>
    )
}
