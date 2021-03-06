import React from 'react'
import {Card, Grid} from "@material-ui/core";

export default function Result({index}) {
    return <Card style={{padding: "20px"}}>
        <Grid container direction="column" justify="center" alignContent="center">
            <h2>Поздравляем!</h2>
            <p>Ты определён в команду {index}</p>
        </Grid>
    </Card>
}