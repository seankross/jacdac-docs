import React from "react"
import { FILE_NODE_NAME, FOLDER_NODE_NAME } from "../constants"
import { StyledTreeItem } from "../ui/StyledTreeView"

export function FileSystemHandleFileTreeViewItem(props: {
    fileHandle: FileSystemFileHandle
}) {
    const { fileHandle } = props
    const { name } = fileHandle
    const id = name

    return <StyledTreeItem nodeId={id} labelText={name} kind={FILE_NODE_NAME} />
}

export function FileSystemHandleDirectoryTreeViewItem(props: {
    handle: FileSystemDirectoryHandle
    fileHandles?: FileSystemFileHandle[]
}) {
    const { handle, fileHandles } = props
    const { name } = handle
    const id = name

    return (
        <StyledTreeItem nodeId={id} labelText={name} kind={FOLDER_NODE_NAME}>
            {fileHandles &&
                fileHandles?.map(fileHandle => (
                    <FileSystemHandleFileTreeViewItem
                        key={fileHandle.name}
                        fileHandle={fileHandle}
                    />
                ))}
        </StyledTreeItem>
    )
}
