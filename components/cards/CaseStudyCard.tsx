import {
  BaseProjectCard,
  type BaseProjectCardProps,
} from "./base/BaseProjectCard";

export interface CaseStudyCardProps
  extends BaseProjectCardProps {
  company?: string;

  role?: string;

  duration?: string;

  outcome?: string;
}

export function CaseStudyCard({
  company,
  role,
  duration,
  outcome,
  ...props
}: CaseStudyCardProps) {
  return (
    <div className="space-y-4">
      {(company || role || duration) && (
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {company && <span>{company}</span>}
          {role && <span>{role}</span>}
          {duration && <span>{duration}</span>}
        </div>
      )}

      <BaseProjectCard
        {...props}
        primaryAction={{
          label: "View Case Study",
          href: props.primaryAction.href,
        }}
        secondaryAction={props.secondaryAction}
      />

      {outcome && (
        <div className="rounded-xl border bg-muted/50 p-4">
          <h4 className="mb-2 font-semibold">
            Outcome
          </h4>

          <p className="text-sm leading-6 text-muted-foreground">
            {outcome}
          </p>
        </div>
      )}
    </div>
  );
}