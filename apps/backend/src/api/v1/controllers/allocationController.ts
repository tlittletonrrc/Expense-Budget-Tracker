import { Request, Response } from "express";
import * as allocationService from "../services/allocationService"

export const createAllocation = async (req: Request, res: Response) => {
    try {
        const newAllocationData = req.body
        await allocationService.createAllocation(newAllocationData)

        res.status(200).json({newOrganization: "successfully Created Allocation"})
    } catch {
        res.status(500).json({
            Error: "Unable to create Allocation"
        })
    }
}