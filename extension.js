const vscode = require('vscode');
const path = require('path');

function activate(context) {
  const disposable = vscode.commands.registerCommand(
    'copyFolderRelativePath.copy',
    async (uri) => {
      if (!uri) {
        return;
      }

      const folder = vscode.workspace.getWorkspaceFolder(uri);
      const relPath = path.relative(folder.uri.fsPath, uri.fsPath).split(path.sep).join('/');

      await vscode.env.clipboard.writeText(relPath);
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
