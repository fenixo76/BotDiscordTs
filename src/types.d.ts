import { Collection, CommandInteraction, SlashCommandBuilder } from "discord.js"

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_ID: string,
            TOKEN: string,
            // Veuillez ajouter les variables d'environnement si nécessaire. dans (.env)
        }
    }
}

declare module "discord.js" {
    export interface Client {
        SlashCommands: Collection<string, SlashCommand>
    }
}

export interface BotEvent {
    name: string,
    once?: boolean | false,
    execute: (...args) => void
}

export interface SlashCommand {
    name: string,
    data: SlashCommandBuilder | any,
    async execute: (interaction: CommandInteraction) => Promise<void>
}

export {}