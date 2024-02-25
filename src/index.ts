import { Collection, Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import { readdirSync } from "fs";
import { join } from "path";
import { SlashCommand } from "./types";

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
    ]
});

client.SlashCommands = new Collection<string, SlashCommand>();

const handlersDir = join(__dirname, "./Handlers");

readdirSync(handlersDir).forEach(file => {
    require(`${handlersDir}/${file}`)(client);
})

client.login(process.env.TOKEN); 