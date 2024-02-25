import { Client, Events } from "discord.js"
import { BotEvent } from "../types";

const event: BotEvent = {
    name: Events.ClientReady,
    once: true,
    execute(client: Client) {
        console.log(`${client.user?.tag} Connecté !`);
    }
}

export default event;