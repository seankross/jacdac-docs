import React from "react"
import { StyledTreeItem } from "../ui/StyledTreeView"

export function FileSystemHandleFileTreeViewItem(props: {
    handle: FileSystemFileHandle
}) {
    const { handle } = props
    const { name } = handle
    const id = name

    return (
        <StyledTreeItem nodeId={id} labelText={name} kind={"file"} />
    )
}

export function FileSystemHandleDirectoryTreeViewItem(props: {
    handle: FileSystemDirectoryHandle
}) {
    const { handle } = props
    const { name } = handle
    const id = name

    return (
        <StyledTreeItem nodeId={id} labelText={name} kind={"directory"} />
    )
}
