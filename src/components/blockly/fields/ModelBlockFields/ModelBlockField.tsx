import React, { lazy, ReactNode, useContext } from "react"
import { Grid, Button } from "@material-ui/core"
import { ReactFieldJSON, VALUE_CHANGE } from "../ReactField"
import ReactImageField from "../ReactImageField"

export interface ModelBlockFieldValue {
    parameter: number
}

export default class ModelBlockField extends ReactImageField<ModelBlockFieldValue> {
    static KEY = "model_field_key"

    constructor(value: string) {
        super(value)

        this.events.on(VALUE_CHANGE, () => {
            this.setSize(32, 32)
        })
    }

    static fromJson(options: ReactFieldJSON) {
        return new ModelBlockField(options?.value)
    }

    get defaultValue() {
        return {
            parameter: 0,
        }
    }

    getText_() {
        const parameter = this.value
        return `${parameter}`
    }

    renderValue(): string {
        // Doesn't work for local images
        return "https://royalposthumus.com/images/white_menu_icon.png"
    }

    renderField(): ReactNode {
        //const { trainingDataset, testingDataset, parameter } = this.value

        return (
            <Grid container>
                <Grid item>Hello</Grid>
            </Grid>
        )
    }
}
