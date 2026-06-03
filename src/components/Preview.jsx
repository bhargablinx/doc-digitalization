// components/Preview.jsx

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

export default function Preview({ file }) {
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [file]);

    if (!file) {
        return (
            <div className="flex items-center justify-center h-full min-h-[400px] border rounded-xl bg-gray-50">
                <p className="text-gray-500">No file selected</p>
            </div>
        );
    }

    const isImage = file.type.startsWith("image/");
    const isPdf = file.type === "application/pdf";

    return (
        <div className="w-full h-full">
            {/* Image Preview */}
            {isImage && (
                <div className="border rounded-xl overflow-hidden bg-gray-50">
                    <img
                        src={previewUrl}
                        alt={file.name}
                        className="w-full max-h-[80vh] object-contain"
                    />
                </div>
            )}

            {/* PDF Preview */}
            {isPdf && (
                <div className="border rounded-xl overflow-hidden">
                    <iframe
                        src={previewUrl}
                        title={file.name}
                        className="w-full h-[80vh]"
                    />
                </div>
            )}

            {/* Unsupported */}
            {!isImage && !isPdf && (
                <div className="flex flex-col items-center justify-center min-h-[400px] border rounded-xl bg-gray-50">
                    <FileText size={60} className="text-gray-400 mb-4" />

                    <p className="font-medium">{file.name}</p>

                    <p className="text-sm text-gray-500 mt-2">
                        Preview not available for this file type
                    </p>
                </div>
            )}
        </div>
    );
}
