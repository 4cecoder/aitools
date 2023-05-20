import { Client } from "node-appwrite"

declare global {
    declare namespace App {
        interface Locals {
            client: Client
        }
    }
}