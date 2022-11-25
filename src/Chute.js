import ChuteSection from "./ChuteSection";

export default function Chute({disabled}) {
    return (
        <ChuteSection>
            <div>Já sei a palavra!</div>
            <input disabled={disabled} type="text" />
            <button>Chutar</button>                
        </ChuteSection>
    )
}