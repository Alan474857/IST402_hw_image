async function loadFile() {
    
    await createRadioInput()
}


async function createRadioInput() {
    let label_type = 'label'
    let function_collect = 'CollectChoice'
    let input_type = 'input'
    let html_radio_input = ""
    // Q1
    const form_q1 = document.getElementById("q1")
    html_radio_input = ""
    for (let i = 1; i <= 4; i++){
        let input_custom = `type="radio" name="ans-1" id="ans-1_${i}" value = "${i}" onclick="${function_collect}('ans-1',value)"`;
        html_radio_input += double_format(label_type, "", double_format("div", 'class="col"', single_format(input_type, input_custom, `${i}`))) + "\n";
    }
    html_radio_input = double_format("div", `id="ans_group_1"`, html_radio_input);
    form_q1.innerHTML += html_radio_input
    // Q2
    const form_q2 = document.getElementById("q2")
    html_radio_input = ""
    for (let i = 1; i <= 4; i++){
        let input_custom = `type="radio" name="ans-2" id="ans-2_${i}" value = "${i}" onclick="${function_collect}('ans-2',value)"`;
        html_radio_input += double_format(label_type, "", double_format("div", 'class="col"', single_format(input_type, input_custom, `${i}`))) + "\n";
    }
    html_radio_input = double_format("div", `id="ans_group_2"`, html_radio_input);
    form_q2.innerHTML += html_radio_input
    // Q3
    const form_q3 = document.getElementById("q3")
    html_radio_input = ""
    let list_ans = ["Epoch", "Number of Workers", "Accuracy", "Distance"]
    for (let i = 0; i < 4; i++){
        let input_custom = `type="radio" name="ans-3" id="ans-3_${i}" value = "${list_ans[i]}" onclick="${function_collect}('ans-3',value)"`;
        html_radio_input += double_format(label_type, "", double_format("div", 'class="col"', single_format(input_type, input_custom, `${list_ans[i]}`))) + "\n";
    }
    html_radio_input = double_format("div", `id="ans_group_3"`, html_radio_input);
    form_q3.innerHTML += html_radio_input
    //Q4
    const form_q4 = document.getElementById("q4")
    html_radio_input = ""
    list_ans = ["Yes", "No"]
    for (let i = 0; i < 2; i++){
        let input_custom = `type="radio" name="ans-4" id="ans-4_${i}" value = "${list_ans[i]}" onclick="${function_collect}('ans-4',value)"`;
        html_radio_input += double_format(label_type, "", double_format("div", 'class="col"', single_format(input_type, input_custom, `${list_ans[i]}`))) + "\n";
    }
    html_radio_input = double_format("div", `id="ans_group_4"`, html_radio_input);
    form_q4.innerHTML += html_radio_input

    //Q5
    const form_q5 = document.getElementById("q5")
    html_radio_input = ""
    list_ans = [50,60,70,80]
    for (let i = 0; i < 4; i++){
        let input_custom = `type="radio" name="ans-5" id="ans-5_${i}" value = "${list_ans[i]}" onclick="${function_collect}('ans-5',value)"`;
        html_radio_input += double_format(label_type, "", double_format("div", 'class="col"', single_format(input_type, input_custom, `${list_ans[i]}`))) + "\n";
    }
    html_radio_input = double_format("div", `id="ans_group_5"`, html_radio_input);
    form_q5.innerHTML += html_radio_input
}

async function CollectChoice(saved_id, ans){
    const input_saved = document.getElementById(saved_id)
    input_saved.value = ans
    await checkAllChoice();
}

async function checkAllChoice(){
    const sub_hint = document.getElementById("submit_hint")
    if (sub_hint.className == 'invisible'){
        return;
    }
    const sub_btn = document.getElementById("submit_button")

    let temp_input;
    for (let i = 1; i <= 5; i++){
        temp_input = document.getElementById(`ans-${i}`);
        if (temp_input.value == ""){
            return;
        }
    }
    sub_btn.className += " visible"
    sub_hint.className = "invisible"
}



//format functions

//<type custom>...</type>
function double_format(type, custom, content) {
    if (custom.length > 0) {
        custom = " " + custom;
    }
    return `<${type}${custom}>${content}</${type}>`;
}

//<type custom>...
function single_format(type, custom, content) {
    return `<${type} ${custom}>${content}`;
}

$(document).ready(function () {
    loadFile();
});
