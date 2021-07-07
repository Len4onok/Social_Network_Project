import renderer from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe ("ProfileStatus component", ()=>{
    test ("after creation <span> should be displayed", ()=>{
        const component=renderer.create(<ProfileStatus status='my status'/>);
        const root=component.root;
        let span=root.findByType('span');
        expect(span).not.toBeNull();
    })

    // test ("after creation <span> should contains correct status", ()=>{
    //     const component=renderer.create(<ProfileStatus status='my status'/>);
    //     const root=component.root;
    //     let span=root.findByType('span');
    //     console.log(span);
    //     expect(span.children[0]).toBe('my status');
    // })
})

