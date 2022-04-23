import * as vscode from "vscode";

/**
 * Activates plugin.
 *
 * @param context - Context.
 */
// eslint-disable-next-line @skylib/only-export-name -- Ok
export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument(fold),
    vscode.commands.registerTextEditorCommand("autofold-comments.paste", paste)
  );
}

/**
 * Folds comments.
 *
 * @param doc - Document.
 */
function fold(doc: vscode.TextDocument): void {
  if (doc.uri.path.endsWith(".git")) {
    // Ignore
  } else vscode.commands.executeCommand("editor.foldAllBlockComments");
}

/**
 * Pastes from clipboard.
 *
 * @param editor - Editor.
 */
function paste(editor: vscode.TextEditor): void {
  vscode.commands
    .executeCommand("editor.action.clipboardPasteAction")
    .then(() => {
      fold(editor.document);
    });
}
