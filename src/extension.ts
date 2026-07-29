import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('vscode-context-analyzer is now active!');

    let disposable = vscode.commands.registerCommand('vscode-context-analyzer.analyzeContext', () => {
        // Örnek durum ve bağlam analizi mantığı
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const text = document.getText();
            
            vscode.window.showInformationMessage(`Analyzed ${text.length} characters of context data.`);
        } else {
            vscode.window.showInformationMessage('No active editor found to analyze.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('vscode-context-analyzer is now active with advanced features!');

    // 1. Komut: Detaylı Satır ve Kelime İstatistikleri Analizi
    let analyzeCommand = vscode.commands.registerCommand('vscode-context-analyzer.analyzeContext', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const text = document.getText();
            const lineCount = document.lineCount;
            const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
            const charCount = text.length;

            vscode.window.showInformationMessage(
                `📊 İstatistikler -> Satır: ${lineCount} | Kelime: ${wordCount} | Karakter: ${charCount}`
            );
        } else {
            vscode.window.showInformationMessage('Analiz edilecek aktif bir editör bulunamadı.');
        }
    });

    // 2. Komut: Temel Erişilebilirlik (A11y) Metin Tarama Mantığı
    let a11yCheckCommand = vscode.commands.registerCommand('vscode-context-analyzer.checkAccessibility', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const text = editor.document.getText();
            // Örnek A11y kuralı: Alternatif metin (alt=) eksikliklerini veya uzun paragrafları tarama
            let issuesCount = 0;
            
            if (text.includes('<img') && !text.includes('alt=')) {
                issuesCount++;
            }

            if (issuesCount > 0) {
                vscode.window.showWarningMessage(`⚠️ Erişilebilirlik Uyarısı: ${issuesCount} olası eksiklik tespit edildi.`);
            } else {
                vscode.window.showInformationMessage('✅ Temel erişilebilirlik taraması temiz çıktı!');
            }
        } else {
            vscode.window.showInformationMessage('Taranacak aktif bir editör bulunamadı.');
        }
    });

    context.subscriptions.push(analyzeCommand, a11yCheckCommand);
}

export function deactivate() {}
