import * as logService from "../services/log-service";

const logsTableBody = document.getElementById("logs-table-body")!;

export async function loadHistory(habits: any[]) {
  try {
    const logs: any[] = await logService.getAllLogs();
    if (logsTableBody) {
      logsTableBody.innerHTML = "";
      logs.sort(
        (a, b) =>
          new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime(),
      );

      logs.forEach((log) => {
        const habit = habits.find((h) => h.id === log.habitId);
        const row = document.createElement("tr");
        const date = new Date(log.completedAt).toLocaleString();
        row.innerHTML = `
          <td>${date}</td>
          <td><span style="color:${habit?.color || "#333"}">${habit?.title || "Неизвестная привычка"}</span></td>
          <td>${log.note || "-"}</td>
        `;
        logsTableBody.appendChild(row);
      });
    }
  } catch (e) {
    console.error(e);
  }
}
