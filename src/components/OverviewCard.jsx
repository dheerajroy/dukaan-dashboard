export default function OverviewCard({ title, value }) {
    return (
        <div className="flex p-[20px] flex-col items-start gap-[16px] bg-white rounded-[8px] shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]">
            <h3 className="text-[#4D4D4D] text-[16px] font-[400] leading-[24px]">{title}</h3>
            <h2 className="text-[32px] font-[500] leading-[38px] text-[#1A181E]">{value}</h2>
        </div>
    )
}
