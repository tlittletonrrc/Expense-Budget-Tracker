import { Request, Response } from "express";
import * as allocationService from "../services/allocationService"


export const getAllocationByUser = async (req: Request, res: Response) => {
    try {
        const user = String(req.params.id)
        const allocations = await allocationService.getAllocationByUser(user)

        res.status(200).json({Allocations: allocations})
    } catch {
        res.status(500).json({
            Error: "Unable to fetch Allocations"
        })
    }
}


export const createAllocation = async (req: Request, res: Response) => {
    try {
        const newAllocationData = req.body
        const newAllocation = await allocationService.createAllocation(newAllocationData)

        res.status(200).json({newAllocation: newAllocation})
    } catch {
        res.status(500).json({
            Error: "Unable to create Allocation"
        })
    }
}


export const updateAllocation = async (req: Request, res: Response) => {
    try {
        const newAllocationData = req.body
        const updatedAllocation = await allocationService.updateAllocation(newAllocationData)

        res.status(200).json({updatedAllocation: updatedAllocation})
    } catch {
        res.status(500).json({
            Error: "Unable to update Allocation"
        })
    }
}


export const deleteAllocation = async (req: Request, res: Response) => {
    try {
        const allocation_id = Number(req.params.id)
        await allocationService.deleteAllocation(allocation_id)

        res.status(200).json({Success: "successfully deleted Allocation"})
    } catch {
        res.status(500).json({
            Error: "Unable to delete Allocation"
        })
    }
}
