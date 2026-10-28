import { describe, expect, test, vi } from "vitest"
import type { Request } from "express"
import { convertAmount } from "../controllers/currencyController"
import * as currencyService from "../services/currencyService"

vi.mock('../services/currencyService')

const createMockResponse = () => {
    const res: any = {}
    res.status = vi.fn().mockReturnThis()
    res.json = vi.fn()
    return res
}