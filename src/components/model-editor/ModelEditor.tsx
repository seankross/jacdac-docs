import React, { useContext, useState, useEffect } from "react"
import { createStyles, Box, Tabs, Tab } from "@material-ui/core"
import TabPanel from "../ui/TabPanel"

import { makeStyles, Theme } from "@material-ui/core/styles"
import useChartPalette from "../useChartPalette"

import CollectData from "./CollectData"
import TrainModel from "./TrainModel"
import ModelOutput from "./ModelOutput"

import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"

import ModelDataset from "./ModelDataset"
import MBModel from "./MBModel"

//Dashboard.tsx

const MODEL_EDITOR = "model_editor" // create prefix for model editor page
export const MODEL_EDITOR_STORAGE_KEY = "model-editor-data-json"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(1),
        },
        grow: {
            flexGrow: 1,
        },
        field: {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1.5),
            display: "inline-flex",
            width: theme.spacing(35),
        },
        segment: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        row: {
            marginBottom: theme.spacing(0.5),
        },
        buttons: {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(2),
        },
        trend: {
            width: theme.spacing(10),
        },
        vmiddle: {
            verticalAlign: "middle",
        },
    })
)

function getModelFromLocalStorage() {
    return new MBModel()
    /*const dataObj = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY)
    if (dataObj == null || dataObj == undefined) return new MBModel()
    const modelEditorData = JSON.parse(dataObj)
    return MBModel.createFromFile(modelEditorData["model"])*/
}

export default function ModelPlayground() {
    const classes = useStyles()
    const chartPalette = useChartPalette()

    const [dataset, setDataset] = useState<ModelDataset>(new ModelDataset())
    const [tfModel, setTFModel] = useState<MBModel>(new MBModel())
    const [tab, setTab] = useState<number>(0)

    const [pageReady, setPageReady] = useState(false)
    useEffect(() => {
        if (!pageReady) {            
            const dataObj = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY)
            if (dataObj !== null && dataObj !== undefined) {
                const modelEditorData = JSON.parse(dataObj)

                if (modelEditorData["dataset"]) setDataset(ModelDataset.createFromFile(modelEditorData["dataset"]))
                // if (modelEditorData["model"]) setMBModel()
                if (modelEditorData["tab"]) setTab(modelEditorData["tab"])
            }
            setPageReady(true)
        }
    }, [dataset, tfModel, tab])


    /* Data and interface management */
    const handleTabChange = (
        event: React.ChangeEvent<unknown>,
        newTab: number
    ) => {
        // save JSON string in local storage
        localStorage.setItem(MODEL_EDITOR_STORAGE_KEY, JSON.stringify({
            "dataset": dataset,
            "model": tfModel,
            "tab": newTab,
        }))
        setTab(newTab)
    }

    const handleDataChange = newDataset => {       
        console.log("Randi updated data from tab 0: ", newDataset)

        // save JSON string in local storage
        localStorage.setItem(MODEL_EDITOR_STORAGE_KEY, JSON.stringify({
            "dataset": newDataset,
            "model": tfModel,
            "tab": tab,
        }))

        setDataset(newDataset)
    }

    const handleModelChange = newModel => {
        console.log("Randi updated model from tab 1: ", newModel)

        // save JSON string in local storage
        localStorage.setItem(MODEL_EDITOR_STORAGE_KEY, JSON.stringify({
            "dataset": dataset,
            "model": newModel,
            "tab": tab,
        }))

        setTFModel(newModel)
    }

    const nextTab = () => {
        if (tab == 0 && dataset.labels.length >= 2) {
            setTab(1)
        } else if (tab == 1 && tfModel.status == "completed") {
            setTab(2)
        }
    }

    return (
        <> {pageReady && <Box mb={2}>
            <h1>ML Model Creator</h1>
            <p>
                This page allows you to collect data from Jacdac sensors and use
                them to train a neural network model that does classification.
            </p>

            <Tabs
                value={tab}
                onChange={handleTabChange}
                aria-label="View specification formats"
            >
                <Tab label={`1 - Collect Data`} />
                <Tab
                    label={`2 - Train Model`}
                    disabled={dataset.labels.length < 2}
                />
                <Tab
                    label={`3 - Test and Deploy`}
                    disabled={tfModel.status !== "completed"}
                />
            </Tabs>
            <TabPanel value={tab} index={0}>
                <CollectData
                    reactStyle={classes}
                    chartPalette={chartPalette}
                    dataset={dataset}
                    onChange={handleDataChange}
                    onNext={nextTab}
                />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <TrainModel
                    reactStyle={classes}
                    chartPalette={chartPalette}
                    dataset={dataset}
                    model={tfModel}
                    onChange={handleModelChange}
                    onNext={nextTab}
                />
            </TabPanel>
        </Box>} </>
    )
}
