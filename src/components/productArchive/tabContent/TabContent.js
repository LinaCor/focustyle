import React from 'react';
import tabsCSS from "./tabContent.module.css";
import {Button, Typography} from "@mui/material";
import AddCartContainer from "../addCart/AddCartContainer";
import glassIcon from '../../../assets/svg/glasses.svg'

function TabContent(props) {

    let glassList = props.glassesList
    let categoryDescription = props.categoryDescription
    return (
        <div className={tabsCSS.glassCardWrapper}>
            { categoryDescription.map( cd => <div className={tabsCSS.catDescription}>
                <Typography className={tabsCSS.catDescTitle} variant={'h4'}>{cd.descTitle}</Typography>
                <Typography className={tabsCSS.catDescText} variant={'h6'}>{cd.descText} <img src={glassIcon} alt="Примерка"/> </Typography>
            </div> )}
            {glassList.map((g) => (
                <div key={g.id}
                     variant={"elevation"}
                     elevation={2}
                     className={`${tabsCSS.glassCard} neumorph`}>
                    <img src={g.gImgUrl} alt={g.gTitle}/>
                    <div className={tabsCSS.sideAttributes}>
                        <button><img src={glassIcon} alt="Примерка"/></button>
                    </div>
                    <Typography
                        className={tabsCSS.glassCardTitle}
                        variant="h5"
                        align={'center'}>{g.gTitle}</Typography>
                    <div className={tabsCSS.cardAttributes}>
                        <Typography variant={'h6'}><strong>Пол: </strong>{g.gGender}</Typography>
                        <Typography variant={'h6'}><strong>Тип очков: </strong>{g.gType}</Typography>
                        <Typography variant={'h6'}><strong>Материал оправы: </strong>{g.gFrameMaterial}</Typography>
                        <Typography variant={'h6'}><strong>Цвет оправы: </strong>{g.gFrameColor}</Typography>
                        <Typography variant={'h6'}><strong>Тип линзы: </strong>{g.gLensType}</Typography>
                        <Typography variant={'h6'}><strong>Цвет линз: </strong>{g.gLensColor}</Typography>
                        <Typography variant={'h6'}><strong>Материал линз: </strong>{g.gLensMaterial}</Typography>
                    </div>
                    <div className={tabsCSS.cardPrice}>
                        <Typography
                            className={tabsCSS.priceText}
                            variant={'h6'}><strong>{Math.round(g.gPrice - (g.gPrice * g.gDiscountPercent) / 100)} ₽</strong></Typography>
                        <Typography
                            className={tabsCSS.priceText} variant={'h6'}><strike>{g.gPrice} ₽ </strike></Typography>
                    </div>
                    <div className={tabsCSS.cardButtonsWrapper}>
                        <AddCartContainer catName={props.categoryName} glassList={glassList} checkCardId={g.id} disableStatus={g.isInCart}/>
                        <Button color={'dark'} className={'neumorph btn'}>
                            <Typography>Примерить <img src={glassIcon} alt="Примерка"/> </Typography>
                        </Button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default TabContent;