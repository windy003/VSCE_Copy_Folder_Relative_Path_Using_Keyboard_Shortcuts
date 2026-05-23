const vscode = require('vscode');
const path = require('path');

function activate(context) {
  const disposable = vscode.commands.registerCommand(
    'copyFolderRelativePath.copy',
    async (uri, uris) => {
      const targets = (uris && uris.length ? uris : uri ? [uri] : []);

      if (!targets.length) {
        return;
      }

      const relPaths = targets.map((u) => {
        const folder = vscode.workspace.getWorkspaceFolder(u);
        if (folder) {
          const rel = path.relative(folder.uri.fsPath, u.fsPath);
          return rel.split(path.sep).join('/');
        }
        return vscode.workspace.asRelativePath(u, false).split(path.sep).join('/');
      });

      const text = relPaths.join('\n');
      await vscode.env.clipboard.writeText(text);
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
