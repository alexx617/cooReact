/**
 * Created by 王佳欣 on 2016/7/20.
 * Switch 组件调用
 */

import React from 'react';
import CooSwitch from '../../CooComponents/CooSwitch';
import CommonStyle from '../common.css';
import Style from './index.css';
import {Link} from 'react-router';

var Index = React.createClass({

    getInitialState(){
        return {
            defaultChecked: false,
            definedChecked: false
        }
    },
    onDefaultChange(value){
        this.setState({
            defaultChecked: value
        })
    },
    onDefineChange(value){
        this.setState({
            definedChecked: value
        })
    },
    render(){

        var style ={

        }
        var checkedStyle={
            backgroundColor: 'rgb(13, 199, 255)'
        }



        return (
            <div className={CommonStyle['shows']}>
                <Link to="/" className={CommonStyle['btn-back']}>←返回</Link>
                <div className={CommonStyle["website-header"]}>
                    <h1 className={CommonStyle["website-name"]}>Switch</h1>
                    <p className={CommonStyle["website-desc"]}>开关组件，支持自定义样式</p>
                </div>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、默认样式：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooSwitch checked={this.state.defaultChecked}
                                       onChange={this.onDefaultChange} />
                        </div>
                        <div className={CommonStyle['shows-detail-key']}>参数说明：</div>
                        <div className={CommonStyle['show-detail']}>

                        </div>
                    </div>
                </div>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>2、自定义样式：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooSwitch checked={this.state.definedChecked}
                                       height= {25}
                                       width ={40}
                                       style={style}
                                       checkedStyle={checkedStyle}
                                       onChange={this.onDefineChange} />

                        </div>
                        <div className={CommonStyle['shows-detail-key']}>参数说明：</div>
                        <div className={CommonStyle['show-detail']}>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = Index;
