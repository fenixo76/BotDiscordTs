import { Events, Interaction } from "discord.js"
import { BotEvent } from "../types";

const event: BotEvent = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction: Interaction) {

        if (interaction.isChatInputCommand()) {
            if (interaction.commandName === "test") {
                console.log(interaction);
            }
        }

        // ! IMPORTANT !
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.SlashCommands.get(interaction.commandName);

        if (!command) return;

        await command.execute(interaction);
        // ! IMPORTANT !
    }
}

export default event;