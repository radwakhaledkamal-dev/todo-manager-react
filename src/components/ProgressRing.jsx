import "./ProgressRing.css";

export default function ProgressRing({ progress, completed, total }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-container">
      <svg className="progress-ring" width="120" height="120">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        <circle
          className="progress-bg"
          cx="60"
          cy="60"
          r={radius}
        />

        <circle
          className="progress-value"
          cx="60"
          cy="60"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <div className="progress-content">
        <h2>{progress}%</h2>
        <span>مكتمل</span>
      </div>

      <div className="progress-info">
        <p>{completed} من {total} مهمة</p>
      </div>
    </div>
  );
}