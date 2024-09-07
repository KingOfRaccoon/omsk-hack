import { useState } from "react";

export default function useModal() {
    const [isGenerateOpen, setIsGenerateOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isTemplateOpen, setIsTemplateOpen] = useState(false);

    const toggleGenerate = () => {
        setIsGenerateOpen(!isGenerateOpen);
        setIsCreateOpen(false);
        setIsTemplateOpen(false);
    };

    const toggleCreate = () => {
        setIsCreateOpen(!isCreateOpen);
        setIsGenerateOpen(false);
        setIsTemplateOpen(false);
    };

    const toggleTemplate = () => {
        setIsTemplateOpen(!isTemplateOpen);
        setIsCreateOpen(false);
        setIsGenerateOpen(false);
    };

    return {
        isGenerateOpen,
        toggleGenerate,
        isCreateOpen,
        toggleCreate,
        isTemplateOpen,
        toggleTemplate,
    };
}
