"use client";

if (typeof window !== "undefined") {
  window.watsonAssistantChatOptions = {
    integrationID: "afa17282-dc45-4b16-aba9-b088a186139a", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "f217be94-906b-444a-96f5-20b27cf69f07", // The ID of your service instance.
    onLoad: async (instance: any) => {
      await instance.render();
    },
  };
  setTimeout(function () {
    const t = document.createElement("script");
    t.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
}

export const Chatbot: React.FC = () => <></>;
