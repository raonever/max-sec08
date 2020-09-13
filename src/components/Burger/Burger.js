import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {                                              // 첫번째 map은 기존 배열에서 value(갯수)만 추출
            return [...Array(props.ingredients[igKey])].map( (_, i) => {     // i 값은 (0, 0, 0, 1, 0, 1)  // 2번째 map에서 출력
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {                  // reduce() : 배열의 두 값 (왼쪽에서 오른쪽으로)에 대해 동시에 함수를 적용하여 단일 값으로 줄입니다. 
            return arr.concat(el)               // concat() : 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. 
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    console.log(transformedIngredients);
    // ** 위 구문을 쉽게 풀어놓은 것 **
    // let transformedIngredients = []; 
    //     for(let key in props.ingredients){        // (salad: 1), (bacon: 1), (cheese: 2), (meat 2)   
    //         for(let i = 0; i<props.ingredients[key]; i++){              // props.ingredients[key] : 1, 1, 2, 2
    //              // { } 부분은 string, 즉 key={key + i}는 {"cheese1"}, transformedIngredients의 새로운 키값을 생성
    //             transformedIngredients.push(<BurgerIngredient key={key + i} type={key} />);  
    //             console.log(props.ingredients[key]);                 // 1, 1, 2, 2, 2, 2
    //             console.log(Object.keys(props.ingredients));                 // {salad: 1, bacon: 1, cheese: 2, meat: 2}
    //             console.log(key);                 // salad, bacon, cheese, cheese, meat, meat
    //         }
    //     }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
