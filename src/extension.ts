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
