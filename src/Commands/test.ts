import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "../types";

export const command: SlashCommand = {
    name: "test",
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Commande de Test"),

        execute: async (interaction) => {

            const embed = new EmbedBuilder()
                .setTitle("La Commande est OK!")
                .setDescription("C'est OK!")

            interaction.reply({content: "Commande OK !", embeds:[embed]})

        }
        
} 