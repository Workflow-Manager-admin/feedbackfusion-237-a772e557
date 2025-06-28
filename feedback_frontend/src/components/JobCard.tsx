import { component$ } from "@builder.io/qwik";

/**
 * JobCard: Shows a job's saved info (company, role, status, etc.). Used in dashboard lists.
 * Props:
 *   job: { company: string, role: string, status: string, [other fields] }
 */
 // PUBLIC_INTERFACE
export default component$<{ job: { company: string, role: string, status: string; [key: string]: any } }>(
  ({ job }) => (
    <div style={{
      border: "1px solid #333", background: "#161A28",
      borderRadius: 10, padding: 12, margin: "10px 0"
    }}>
      <b>{job.role}</b> @ {job.company} <br />
      <span style={{ color: "#aaa" }}>Status: <b style={{ color: "#18b6f6" }}>{job.status}</b></span>
      {/* Other job fields? */}
      {job.notes && (
        <div style={{ marginTop: 6, fontSize: "0.9em", color: "#eee" }}>
          {job.notes}
        </div>
      )}
    </div>
  )
);
