import React, { lazy, useMemo } from "react"
import Suspense from "./Suspense"
import { Dialog, DialogContent, NoSsr } from "@material-ui/core"
import type { PlainObject, VisualizationSpec } from "react-vega"

const VegaLite = lazy(() => import("./VegaLite"))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function clone(v: any) {
    return v ? JSON.parse(JSON.stringify(v)) : v
}

export default function VegaLiteDialog(props: {
    spec: VisualizationSpec
    data: PlainObject
    onClose: () => void
}) {
    const { spec, data, onClose } = props

    // TODO merge json
    const fullSpec = useMemo(() => {
        if (!spec) return spec
        const s = clone(spec)
        s.width = "container"
        s.height = "container"
        return s
    }, [spec])

    const open = !!fullSpec && !!data

    if (!open) return null

    return (
        <Dialog fullScreen={true} open={open} onClose={onClose}>
            <DialogContent>
                <NoSsr>
                    <Suspense>
                        <VegaLite
                            actions={{
                                export: { png: true, svg: true },
                                source: false,
                                compiled: false,
                                editor: false,
                            }}
                            spec={spec}
                            data={data}
                            renderer="svg"
                            tooltip={true}
                        />
                    </Suspense>
                </NoSsr>
            </DialogContent>
        </Dialog>
    )
}
